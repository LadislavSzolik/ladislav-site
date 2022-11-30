const md = require('markdown-it')({html:true})
/**
 *@param {string} text
 *@return {string}
 */
const lessons = (text) => {
    const content = md.render(text);
    return `
<div class="mx-auto text-center bg-sky-100 rounded-2xl px-4 sm:px-7 py-4">
<h4>Lessons learned</h4>
<p>${content}</p>
</div>
    `;
};

module.exports = lessons;
