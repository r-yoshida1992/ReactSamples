package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func PostSampleAction(c *gin.Context) {

	// jsonリクエストのマッピング
	var json JsonReq
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// jsonを返却
	c.JSON(200, JsonReq{
		Name:  json.Name,
		Email: json.Email,
	})

}

type JsonReq struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}
