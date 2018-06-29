<template>
    <div v-if="this.response.total_count">
        <div class="row valign-wrapper grey lighten-4" v-for="item in this.response.items">
            <div class="col s1">
                <a href="">
                    <img :src="item.owner.avatar_url" class="responsive-img" id="owner-icon">
                </a>
            </div>
            <div class="col s10">
                <p><a href="">{{ item.full_name }}</a></p>
                <p class="grey-text">{{ item.description ? item.description : 'Github-Tools: There is no description.' }}</p>
            </div>
            <div class="col center">
                <i class="material-icons">star</i>
                <span>{{ item.watchers }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'response',
        ],
        data () {
            return {
                items: this.response.items,
                total: this.response.total_count,
            }
        }
    }
</script>

<style scoped>

</style>