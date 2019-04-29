
const categoryDom = (obj) => {
    return `
        <option>${obj.name}</option>
    `;
};

const categoryDetailDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.junk}
            </div>`;
};

const buildCategoryDom = (data) => {
    junk__drop.innerHTML = "";
    data.forEach(element => {
        junk__drop.innerHTML += categoryDom(element);
    });
};

const buildCategoryDetailDom = (data) => {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += `<h2>${data.name}</h2>`;
    data.junk.forEach(element => {
        mainContainer.innerHTML += categoryDetailDom(element);
    });
};