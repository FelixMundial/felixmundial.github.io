<script>
import Layout from './Layout';

export default {
	extends: Layout,
	name: 'SpringLayout'
};
</script>

<style lang="stylus">
$navbar-background-color = #34302d
$navbar-item-background-color-activated = #0cee4c
$navbar-text-color = #c9eee8

.navbar
    background-color $navbar-background-color
    .site-name, .links
        color $navbar-text-color
    .links
        .search-box
            input
                background-color $navbar-background-color
                &:hover
                    background-color azure
.nav-links
    .nav-item
        &:hover
            background-color $navbar-item-background-color-activated
            transition all .5s
            color $navbar-background-color
    .nav-item > a:not(.external)
        &.router-link-active
            margin-bottom -2px !important
            border-bottom 2px solid lighten($navbar-item-background-color-activated, 8%)
            color $navbar-item-background-color-activated
            &:hover
                color $navbar-background-color
.dropdown-wrapper
    .nav-dropdown
        background-color $navbar-item-background-color-activated
        .dropdown-item
            &:hover
                background-color $navbar-background-color
    .dropdown-title .arrow
        border-top 6px solid lighten($navbar-background-color, 30%)
</style>
