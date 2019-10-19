<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <a
      class="dropdown-title"
      @click="toggle"
    >
      <span class="title" v-html="item.text">{{ item.text }}</span>
      <span
        class="arrow"
        :class="open ? 'down' : 'right'"
      ></span>
    </a>

    <DropdownTransition>
      <ul
        class="nav-dropdown"
        v-show="open"
      >
        <li
          class="dropdown-item"
          :key="subItem.link || index"
          v-for="(subItem, index) in item.items"
        >
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul
            class="dropdown-subitem-wrapper"
            v-if="subItem.type === 'links'"
          >
            <li
              class="dropdown-subitem"
              :key="childSubItem.link"
              v-for="childSubItem in subItem.items"
            >
              <NavLink :item="childSubItem"/>
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  components: { NavLink, DropdownTransition },

  data () {
    return {
      open: false
    }
  },

  props: {
    item: {
      required: true
    }
  },

  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus">
$navbar-background-color = azure
$navbar-item-background-color = #aceed1
/*$box-shadow-param = .5px .5px 2px $accentColor*/
$box-shadow-param = 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

.dropdown-wrapper
  cursor pointer
  .dropdown-title
    display block
    &:hover
      border-color transparent
    .arrow
      vertical-align middle
      margin-top -1px
      margin-left 0.4rem
  .nav-dropdown
    .dropdown-item
      color inherit
      line-height 2rem
      &:hover
        background-color $navbar-item-background-color
      h4
        margin 0.45rem 0 0
        border-top 1px solid #eee
        padding 0.45rem 1.5rem 0 1.25rem
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        display block
        line-height 2rem
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
        &:hover
          color $accentColor
        //  Remove the triangle list item symbol
        /*&.router-link-active
          color $accentColor
          &::after
            content ""
            width 0
            height 0
            border-left 5px solid $accentColor
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 9px*/
      &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0

@media (max-width: $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem
    .dropdown-title .arrow
      // fix arrow direction at mobile view
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    .nav-dropdown
      transition height .1s ease-out
      overflow hidden
      background-color inherit !important //
      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem
        &:hover
          background-color inherit !important //

@media (min-width: $MQMobile)
  .dropdown-wrapper
    /*height 1.8rem*/
    &:hover .nav-dropdown
      // override the inline style.
      display block !important
    .dropdown-title .arrow
      // make the arrow always down at desktop
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    .nav-dropdown
      display none
      list-style-type none
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top 100%
      /*right 0*/
      background-color $navbar-background-color
      padding 0
      /*padding 0.6rem 0*/
      /*border 1px solid #ddd*/
      border-bottom-color #ccc
      -moz-box-shadow: $box-shadow-param; -webkit-box-shadow: $box-shadow-param; box-shadow: $box-shadow-param;
      text-align center
      border-radius .1rem
      white-space nowrap
      margin 0
</style>
