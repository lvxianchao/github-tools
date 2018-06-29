<template>
    <div class="container">
        <div class="card">
            <div class="row" id="search">
                <div class="input-field col s12">
                    <github-icon-svg width="32" height="32" class="prefix"></github-icon-svg>
                    <input type="text" id="autocomplete-input" class="autocomplete" autofocus v-model="keyword">
                    <label for="autocomplete-input">Repositories</label>
                </div>
            </div>

            <repositories :response="response"></repositories>
        </div>
    </div>
</template>

<script>
    import GithubIconSvg from '../common/GithubIconSvg'
    import Repositories from './Repositories'

    export default {
        components: {
            GithubIconSvg,
            Repositories,
        },
        data() {
            return {
                keyword: '',
                // 响应的结果
                response: {},
                // API 地址
                api: {
                    repositories: {
                        find: 'https://api.github.com/repos/',
                        search: 'https://api.github.com/search/repositories',
                    },
                }
            }
        },
        watch: {
            // 监控关键字输入，做查询请求及图标转为等待。
            keyword(newKeyword, oldKeyword) {
                this.debouncedQuery();
            }
        },

        methods: {
            // 发送查询请求
            query(page = 1, per_page = 10, sort = 'stars', order = 'desc') {
                let url = `${this.api.repositories.search}?q=${this.keyword}&page=${page}&per_page=${per_page}&sort=${sort}&order=${order}`;

                axios.get(url).then((response) => {
                    this.response = response.data;
                    console.log(response);
                }).catch((error) => {
                    this.error = 'Error! Could not reach the API. ' + error;
                });
            }
        },

        created() {
            // 限制查询频率
            this.debouncedQuery = _.debounce(this.query, 300);
        }
    }
</script>
