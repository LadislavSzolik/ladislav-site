const md = require('markdown-it')({html: true});

function Md(content) {
    const render = md.render(content);
    return render
}

module.exports = Md
