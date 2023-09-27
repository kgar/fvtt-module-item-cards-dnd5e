export const MODULE_ID = 'item-cards-dnd5e';
export const PATH = `modules/${MODULE_ID}`;

const settings = {
	showCards: {
		name: 'Show Cards',
		hint: 'Show item cards on screen when items are played.',
		scope: 'client',
		config: true,
		type: Boolean,
		default: true,
	},
	doubleClick: {
		name: 'Flip on Double Click',
		hint: 'Flip cards only on double clicks.',
		scope: 'client',
		config: true,
		type: Boolean,
		default: true,
	},
	autoClose: {
		name: 'Automatically Close Cards',
		hint: 'Time in miliseconds for the cards to disappear. 0 to disable.',
		scope: 'client',
		config: true,
		type: Number,
		default: 6000,
	},
	defaultPosition: {
		name: 'Card Default Position',
		scope: 'client',
		config: true,
		type: String,
		default: '',
	},
	defaultPositionServer: {
		name: 'Card Default Position (server)',
		scope: 'world',
		config: true,
		type: String,
		default: '',
	},
	showCardsPlayers: {
		name: 'Show Cards PC (server)',
		hint: 'Show item cards when players use items.',
		scope: 'world',
		config: true,
		type: Boolean,
		default: true,
	},
	showCardsGMs: {
		name: 'Show Cards GM (server)',
		hint: 'Show item cards when GMs use items.',
		scope: 'world',
		config: true,
		type: Boolean,
		default: false,
	},
	specialMembership: {
		name: 'Special Membership (server)',
		hint: 'If using the Donation Membership API, allow members with at least the specified membership to change the cards images.',
		scope: 'world',
		config: true,
		type: String,
		default: '',
	},
};
export function getSetting(name) {
	return game.settings.get(MODULE_ID, name);
}
export function setSetting(name, value) {
	return game.settings.set(MODULE_ID, name, value);
}
Hooks.once('setup', () => {
	for (const [key, setting] of Object.entries(settings)) {
		game.settings.register(MODULE_ID, key, setting);
	}
});
