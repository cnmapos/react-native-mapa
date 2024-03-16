// git-cz 的配置文件，可根据自己的场景进行配置，这里使用默认配置，提交前明确自己的改动属于什么类型的变更，也更有利于项目维护
// https://www.npmjs.com/package/git-cz
module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues'],
    scopes: [],
    types: {
        chore: {
            description: '更改构建过程或辅助工具和库，例如文档生成',
            emoji: '🤖',
            value: 'chore',
        },
        ci: {
            description: '对CI配置文件和脚本的更改',
            emoji: '🎡',
            value: 'ci',
        },
        docs: {
            description: '文档修改',
            emoji: '✏️',
            value: 'docs',
        },
        feat: {
            description: '一项新功能',
            emoji: '🎸',
            value: 'feat',
        },
        fix: {
            description: '一个bug修复',
            emoji: '🐛',
            value: 'fix',
        },
        perf: {
            description: '性能提升',
            emoji: '⚡️',
            value: 'perf',
        },
        refactor: {
            description: '重构代码、不修改功能',
            emoji: '💡',
            value: 'refactor',
        },
        release: {
            description: '创建发布提交',
            emoji: '🏹',
            value: 'release',
        },
        style: {
            description: '代码格式修改',
            emoji: '💄',
            value: 'style',
        },
        test: {
            description: '修改测试相关代码',
            emoji: '💍',
            value: 'test',
        },
        messages: {
            type: "Select the type of change that you're committing:",
            customScope: 'Select the scope this component affects:',
            subject: 'Write a short, imperative mood description of the change:\n',
            body: 'Provide a longer description of the change:\n ',
            breaking: 'List any breaking changes:\n',
            footer: 'Issues this commit closes, e.g #123:',
            confirmCommit: 'The packages that this commit has affected\n',
        },
    },
};
