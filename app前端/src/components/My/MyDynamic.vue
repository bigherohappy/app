<template>
	<div class="content">
		<van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <van-uploader v-model="fileList" multiple :max-count="2" />
		<image src="../../assets/xi.jpg" mode="" style="width: 80px;height: 80px;"></image>
		<div class="title">
			<input type="text" value="" v-model="cont" placeholder="分享你的好心情~ 分享你的有趣故事哦" />
		</div>
	
			<div>
				<p>{{cont}}</p>

			</div>
		<!-- <div class="con">
			<textarea value="" placeholder="分享你的有趣故事哦"  rows="3" cols="40" />
		</div> -->
		<!-- <div class="btn" style="margin-top:20px">
			<div class="one bg">
				<span style="color:#000">#话题</span>
			</div>
			<div class="two bg">
				<span style="color:#000">@用户</span>
			</div>
			
		</div> -->
		<van-button type="primary" plain block @click="send">发布动态</van-button>
		<!-- <button type="default">发布动态</button> -->
	</div>
</template>
<script>
	import { Uploader } from 'vant';
	export default {
		components: {
		
    },
		data() {
			return {
				fileList:[],
				cont:''
				
			};
		},
		/**
		 * 上拉加载
		 * 这很重要
		 */
		onReachBottom() {
			// this.$refs.waterfalls_flow_nav.getList();
		},
		methods: {
			onClickLeft  () {
				history.back();
			},
			send(){
				console.log(this.cont,'内容')
				console.log(this.fileList,'fileList')

			}
			
		},
	};
</script>

<style lang="less" scoped>
	.content {
		padding: 10px;
		background-color: #fff;
		height: 900px;
		 /deep/ .van-ellipsis {
    color: #78e69d;
  }

/deep/  .van-nav-bar .van-icon {
    color: #78e69d;
  }

 /deep/ .van-nav-bar__text {
    color: #78e69d;
  }

		image{
			border-radius: 10px;
			// padding: 10px;
			margin-left: 10px;
		}
		.cnt {
			padding: 10px;

			.title {
				font-size: 16px;
			}

			.text {
				font-size: 14px;
				margin-top: 5px;
			}
		}
	
		input{
			width: 100%;
			height: 50rpx;
			border: none;
		
		}
		.title{
				padding: 20px 10px 10px 10px;
				// margin-top: 20px;
				font-size: 16px;
				border-bottom: 1px solid #d9d9d9;
		}
		.con{
				padding: 10px;
		}
		.btn{
			display: flex;
			 flex-direction: row ;
			width: 100%;
			height: 40px;
			.bg{
				width: 50px;
				height: 24px;
				border-radius: 5px;
				background-color: #dedede;
				padding: 5px;
				margin-left: 10px;
				justify-content: center;
				align-content: center;
				// text-align: center;
			}
		}
		button{
			// margin-top: 200px;
		}
	}
</style>
