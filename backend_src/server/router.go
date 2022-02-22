package server

import (
	"backend_src/controller"
	"backend_src/core"
	"github.com/gin-gonic/gin"
)

func GetRouter() *gin.Engine {
	router := gin.Default()
	router.Use(core.CorsSetting())

	router.POST("/post_sample", controller.PostSampleAction)
	router.POST("/calc", controller.CalcAction)

	return router
}
