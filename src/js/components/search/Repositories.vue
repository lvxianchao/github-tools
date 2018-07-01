<template>
    <div v-show="response.total_count">
        <ul class="collection">
            <li class="collection-item avatar" :class="{'active-this': key == 0}" v-for="(item, key) in response.items" @mouseover="hover(key)">
                <a :href="item.owner.html_url" target="_blank">
                    <img :src="item.owner.avatar_url" class="circle">
                </a>
                <a :href="item.html_url" class="title" target="_blank">
                    <span>{{ item.full_name }}</span>
                    <span class="grey-text" v-if="item.language">({{ item.language }})</span>
                </a>
                <p class="truncate">
                    <span class="grey-text" v-tooltip="item.description" v-if="item.description">{{ item.description }}</span>
                    <span class="teal-text" v-else>Github-Tools: There is no description.</span>
                </p>
                <div class="secondary-content">
                    <i class="material-icons">star</i><br>
                    <span>{{ item.watchers }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['response'],
        data() {
            return {
                activeKey: 0,
                activeClass: 'active-this',
            }
        },
        computed: {
            length() {
                return document.querySelectorAll('li').length - 1;
            }
        },
        watch: {
            activeKey(newValue, oldValue) {
                if (newValue > oldValue) {
                    if (this.activeKey > this.length) {
                        this.activeKey = 0;
                    }
                } else {
                    if (this.activeKey < 0) {
                        this.activeKey = this.length;
                    }
                }
                $('li').eq(this.activeKey).addClass(this.activeClass).siblings().removeClass(this.activeClass);
            }
        },
        methods: {
            up() {
                this.activeKey -= 1;
            },
            down() {
                this.activeKey += 1;
            },
            enter() {
                window.open($('li').eq(this.activeKey).children('.title').attr('href'));
            },
            hover(key) {
                if (key != this.activeKey) {
                    this.activeKey = key;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collection .collection-item.avatar {
        min-height: auto;
        padding-right: 70px;

        .secondary-content {
            top: 8px;
            text-align: center;
        }

        img {
            width: 42px;
            height: 42px;
            position: absolute;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
            left: 15px;
            border: 1px solid #26a69a;
            padding: 1px;
            border-radius: 5px;
        }
    }

    .active-this {
        background-color: #e0e0e0;
    }
</style>