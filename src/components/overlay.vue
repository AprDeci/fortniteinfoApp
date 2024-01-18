<template>
    <view
      class="cc-mask"
      :class="{ 'cc-mask-show': show, 'cc-mask-hide': !show }"
      :style="{ zIndex, background: bgColor, display }"
      @click="handleClick"
    >
      <slot></slot>
    </view>
  </template>
  
  <script>
  export default {
    name: 'overlay',
    components: {},
    props: {
      // 是否显示遮罩层
      show: {
        type: Boolean,
        default: false
      },
      // 层级
      zIndex: {
        type: [Number, String],
        default: 1
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.7)'
      },
      // 遮罩是否可点击
      maskClick: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        display: ''
      }
    },
    methods: {
      handleClick() {
        // 我们让父组件通过.sync传值 从而可以直接修改父组件的值
        this.$emit('update:show', !this.show)
        // 分发一个click事件给父组件 从而让父组件可以绑定事件
        this.$emit('click')
      }
    },
    mounted() {
    },
    onLoad() {},
    onShow() {},
    filters: {},
    computed: {},
    watch: {
      show(val) {
        if (val) this.display = 'block'
          else {
            setTimeout(() => {
              this.display = 'none'
            }, 100)
          }
      }
    }
  }
  </script>
  
  
  <style scoped lang="scss">
  .cc-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    &-show {
      animation: show 0.25s linear forwards;
    }
    &-hide {
      animation: hide 0.25s linear forwards;
      &.cc-mask {
        display: none;
      }
    }
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  </style>
  
  