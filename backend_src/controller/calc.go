package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func CalcAction(c *gin.Context) {

	// jsonリクエストのマッピング
	var json CalcReq
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	res := 0

	num1temp, _ := strconv.Atoi(json.Num1)
	num2temp, _ := strconv.Atoi(json.Num2)

	switch json.Symbol {
	case Plus:
		res = num1temp + num2temp
		break
	case Minus:
		res = num1temp - num2temp
		break
	case Multiply:
		res = num1temp * num2temp
		break
	case Divide:
		res = num1temp / num2temp
		break
	default:
		break
	}

	// jsonを返却
	c.JSON(200, CalcRes{
		Result: res,
	})

}

type CalcReq struct {
	Num1   string `json:"num1"`
	Symbol string `json:"symbol"`
	Num2   string `json:"num2"`
}

type CalcRes struct {
	Result int `json:"result"`
}

const (
	Plus     = "+"
	Minus    = "-"
	Multiply = "*"
	Divide   = "/"
)
