import select from 'select-dom';
import features from '../libs/features';

function init() {
	for (const a of select.all<HTMLAnchorElement>('a[href$="/milestones"], a[href*="/milestones?"]')) {
		const url = new URL(a.href);
		// Only if they aren't explicitly sorted differently
		if (!url.searchParams.get('direction') && !url.searchParams.get('sort')) {
			url.searchParams.set('direction', 'asc');
			url.searchParams.set('sort', 'due_date');
			a.href = String(url);
		}
	}
}

features.add({
	id: 'sort-milestones-by-closest-due-date',
	include: [
		features.isRepo
	],
	load: features.onAjaxedPages,
	init
});
