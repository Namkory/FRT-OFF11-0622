const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

tabs = $$('.tab-item');
panes = $$('.tab-pane');

tabs.forEach((tab, index)=>{
    const pane = panes[index];
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        tab.classList.add('active');
        pane.classList.add('active');

    }
})


