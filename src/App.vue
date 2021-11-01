<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style  lang="scss">

  	*
	{
		box-sizing: border-box;
	}

	html, body
	{
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
	}

	.wrapper{
		width: 1200px;		
		margin: 0 auto;
	}
	.small-wrapper{
		width: 600px;
		margin : 0 auto;
	}

	.send-box{
		padding: 40px;
		border-radius: 4px;
		box-shadow: 0 0 1px 0 #000;
	}
	.space-top{
		margin-top: 50px;
	}
	.rtl{
		direction: rtl;
		text-align: right;
	}
	.title{
		font-size: 22px;
		font-weight: bold;
		margin-bottom: 1rem;
	}

</style>
