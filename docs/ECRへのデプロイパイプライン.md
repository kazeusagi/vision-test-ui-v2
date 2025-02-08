# AWS ECRへのデプロイパイプライン

参考サイト: [https://dev.classmethod.jp/articles/github-actions-aws-sts-credentials-iamrole/]()

AWS ECR への OIDC によるデプロイパイプラインの構築には以下が必要  

* Github Actions のIDプロバイダーの追加
* （オプション）IAMロールに付与するポリシーの作成
* Github Actions から利用するIAMロールの作成

## Github ActionsのIDプロバイダーの追加

| 項目 | 値 |
| - | - |
| プロバイダのタイプ | OpenID Connect |
| プロバイダ | token.actions.githubusercontent.com |
| 対象者 | sts.amazonaws.com |

## （オプション）IAMロールに付与するポリシーの作成

Github ActionsからDockerImageをプッシュするための最小権限を持つポリシーを作成

``` json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "GetAuthorizationToken",
            "Effect": "Allow",
            "Action": [
                "ecr:GetAuthorizationToken"
            ],
            "Resource": "*"
        },
        {
            "Sid": "PushImageOnly",
            "Effect": "Allow",
            "Action": [
                "ecr:BatchCheckLayerAvailability",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:PutImage"
            ],
            "Resource": "arn:aws:ecr:${REGION}:${ACCOUNT_ID}$:repository/*"
        }
    ]
}
```

## Github Actionsから利用するIAMロールの作成

上記でポリシーを作成した場合は、そのポリシーを適用したIAMロールを作成  
→ 信頼されたエンティティタイプ・ユースケース等は一旦適当に入力しておく

ポリシーを作成していない場合は、`許可を追加` のページで適切な権限を振っておく（ECRへのプッシュ権限および認証トークンの取得権限）  
名前、説明は適宜

信頼されたエンティティの JSON にて以下を入力

``` json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::${ACCOUNT_ID}:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:${GITHUB_REPOSITORY_OWNER}/${GITHUB_REPOSITORY_NAME}:*"
                }
            }
        }
    ]
}
```

※ 上記のConditionではワイルドカードが使えるので所有者の配下のすべてのリポジトリに対して許可を行うことも出来る。
