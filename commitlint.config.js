// 用于git提交commit时，对commit的内容进行检查，避免不符合规范的commit，可参考 https://commitlint.js.org/guides/local-setup.html 进行配置
module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        // 类型枚举，必须匹配否则报错
        'type-enum': [2, 'always', ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf']],
        // 类型为空，不可
        'type-empty': [2, 'never'],
        // scope校验关闭
        'scope-empty': [0, 'never'],
        // 短描述，不可为空
        'subject-empty': [2, 'never'],
        // 头部长度，100字符
        'header-max-length': [2, 'always', 100],
    },
};
