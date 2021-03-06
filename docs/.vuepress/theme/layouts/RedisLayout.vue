<script>
import Layout from './Layout';

export default {
	extends: Layout,
	name: 'RedisLayout'
};
</script>

<style lang="stylus">
$navbar-background-color = #ff845d
$navbar-item-background-color-activated = $navbar-background-color
$navbar-text-color = #34302d

.navbar
    background-color $navbar-background-color
    .site-name, .links
        color $navbar-text-color
    .links
        .search-box
            input
                background-color lighten($navbar-background-color, 75%)
                &:hover
                    background-color azure
.nav-links
    .nav-item
        &:hover
            background-color $navbar-item-background-color-activated
            transition all .5s
.dropdown-wrapper
    .nav-dropdown
        background-color azure
        .dropdown-item
            &:hover
                background-color lighten($navbar-background-color, 25%)
    .dropdown-title .arrow
        border-top 6px solid darken($navbar-background-color, 20%)
</style>
