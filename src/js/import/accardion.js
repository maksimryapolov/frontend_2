(() => {
    const container = $('.b-tooltip');
    const items = container.find('.b-tooltip__item');
    const content = items.find('.b-tooltip__content');

    const timeEff = 300;

    const fadeItems = (el) => {
        const content = el.find('.b-tooltip__content');
        content.hide(timeEff);
        content.removeClass('tooltip-open');
    }

    fadeItems(items);

    items.each((index, item) => {
        $(item).on('click', (e) => {
            const classForOpen = 'tooltip-open';
            const content = $(item).find('.b-tooltip__content');

            if(content.hasClass(classForOpen)) {
                fadeItems($(item));
                return;
            }

            fadeItems(items);

            if (!content.hasClass(classForOpen)) {
                content.addClass(classForOpen);
                content.show(timeEff)
            }
        });
    });
})();
