<script>

    import Layout from "./Layout";

    export default {
        extends: Layout,
        name: "DockerLayout"
    }
</script>

<style lang="stylus">
    $navbar-background-color = #7e8fff
    $navbar-item-background-color-activated = $navbar-background-color
    $navbar-text-color = azure

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
            background-color $navbar-text-color
            color #34302d
            .dropdown-item
                &:hover
                    background-color lighten($navbar-background-color, 25%)
        .dropdown-title .arrow
            border-top 6px solid lighten($navbar-background-color, 30%)

</style>
