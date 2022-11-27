/**
 *@param {string} text
 *@return {string}
 */
const lessons = (text) => {
    return `
   <div class="max-w-3xl mx-auto text-center bg-sky-100 rounded-2xl px-4 sm:px-7 py-4">
            <h3 class="font-semibold">Lessons learned</h3>
            <p>${text}</p>
        </div>
    `;
};

module.exports = lessons;
