package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func main() {
	// GinのEngineインスタンスを取得
	router := gin.Default()

	// ここからCorsの設定
	router.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		// アクセスを許可したいHTTPメソッド(以下の例だとPUTやDELETEはアクセスできません)
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		// 許可したいHTTPリクエストヘッダ
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: true,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	}))

	// Postのハンドラを登録
	router.POST("/hello", func(c *gin.Context) {

		// jsonリクエストのマッピング
		var json JsonReq
		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// 非同期処理がわかりやすいように1秒待つ
		time.Sleep(1 * time.Second)

		// jsonを返却
		c.JSON(200, JsonReq{
			Name:  json.Name,
			Email: json.Email,
		})
	})

	// サービス開始
	router.Run(":8080")
}

type JsonReq struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}
