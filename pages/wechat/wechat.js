var app = getApp()
var util = require('../../utils/util.js')
app.getUserInfo();
Page({
    data:{
      list:null,
      modalHidden:true
    },
    onReady:function(){
        util.getUser(this);
    },
    modalTap: function(e) {
        this.setData({
            modalHidden: false
        })
    },
    modalChange:function(e){
        this.setData({
            modalHidden: true
        })
    },
    goPage:function(e){
        var _self = this;
        var newlist = _self.data.list
        var index = e.currentTarget.dataset.index
        newlist[index].count=0;
        _self.setData({
            list: newlist
        })
        // console.log(e.currentTarget.dataset.index)
        // console.log(e.target.dataset.name)
        wx.navigateTo({
            url: '../message/message?name='+e.currentTarget.dataset.name+"&id="+e.currentTarget.dataset.id
        })
        // console.log(test);
    },
    onPullDownRefresh:function(){
        console.log("启动下拉")
        setTimeout(function(){
            wx.stopPullDownRefresh()
        },3000)
    }
})
