<style lang="less" scoped>
.dialog-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-box {
  background-color: #ffffff;
  width: 270px;
  margin: 100px auto 0;
  font-size: 15px;
  border-radius: 10px !important;
  .header {
    color: #000000;
    padding-top: 20px;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
  }
  .header.input {
    padding-top: 15px;
  }
  .body {
    padding: 10px 15px;
    padding-bottom: 25px;
    color: #3f3f3f;
  }
  .edit-block {
    padding: 15px 15px;
    .edit-el {
      padding: 10px 15px;
      width: 100%;
      color: #3f3f3f;
    }
    .edit-el::placeholder {
      color: #a0b0b7;
    }
  }
  .footer {
    border-top: 1px solid #e9ecf1;
    height: 50px;
    line-height: 50px;
    white-space: nowrap;
    font-size: 0;
    .my-cancel-btn {
      font-size: 15px;
      width: 50%;
      color: #222222;
      border-right: 1px solid #e9ecf1;
      height: 50px;
      border-radius: 0 0 0 10px;
    }
    .confirm-btn {
      font-size: 15px;
      width: 50%;
      height: 50px;
      border-radius: 0 0 10px 0;
    }
  }
}
textarea {
  background-color: #f5f5f5;
}
.selectList {
  margin-top: 10px;
  padding-bottom: 10px;
  .listItem {
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    > i {
      position: absolute;
      right: 15px;
      top: 0px;
    }
    .active{
      color: #597EF7;
    }
  }
}
</style>
<template>
  <div class="dialog-mask" v-if="showDialog">
    <div class="dialog-box">
      <header class="header" v-html="title" v-if="title" :class="{'input': type === 'input'}">
      </header>
      <article class="body tc" v-html="text" v-if="type === 'text'">
      </article>
      <article class="edit-block" v-if="type === 'textarea'">
        <textarea class="edit-el" rows="2" v-model="text" autofocus id="tex" :placeholder='ptext'></textarea>
      </article>
      <article class="selectList" v-if="type === 'select'">
        <div class="listItem" v-for="(item,index) in list" :key="index" @click="toSelect(item)">
          <span :class="{'active':item.isSelect}">{{item.val}}</span>
          <!-- <img src="../../../assets/img/gou.png" alt="" width="16" class="fr" v-if="item.isSelect"> -->
          <i class="iconfont icon-i c1" v-if="item.isSelect"></i>
        </div>
      </article>
      <div class="footer tc">
        <button class="my-cancel-btn" v-show="showCancelBtn" v-text="cancelText" @click="cancelClick"></button>
        <button class="confirm-btn c1" :style="{width: showCancelBtn ? '50%' : '100%', color: theme}" v-text="confirmText" @click="confirmClick"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dialog-box',
  data () {
    return {
      showDialog: true,
      type: 'text',
      title: '',
      text: '',
      ptext: '',
      showCancelBtn: true,
      confirmText: '确定',
      cancelText: '取消',
      placeholder: '',
      theme: '#F64C4C',
      confirm: null,
      list: []
    }
  },
  methods: {
    cancelClick () {
      this.showDialog = false
    },
    confirmClick () {
      if (this.type === 'select' && !this.text) {
        return
      }
      this.confirm(this.text)
      this.showDialog = false
    },
    toSelect (item) {
      for (var i in this.list) {
        this.$set(this.list[i], 'isSelect', false)
      }
      this.$set(item, 'isSelect', true)
      this.text = item
      // this.confirm(this.text)
      // this.showDialog = false
    }
  },
  mounted () {
    this.text = this.content
    if (this.type === 'textarea') {
      this.$nextTick(() => {
        document.getElementById('tex').focus()
      })
    }
  }
}
/*  使用例子
    this.$dialog({
    // type: 'input',
    title: '流程结束',
    // placeholder: '请输入内容文本...',
    content: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
    showCancelBtn: true,
    confirmText: '确认',
    theme: '#ea5950',
    confirm () {
      vm.doSubmitAgree()
    }
  }) */
</script>
