const AVATARS = [
	'https://semantic-ui.com/images/avatar/large/stevie.jpg',
	'https://semantic-ui.com/images/avatar/large/jenny.jpg',
	'https://semantic-ui.com/images/avatar2/large/elyse.png',
	'https://semantic-ui.com/images/avatar2/large/kristy.png',
	'https://semantic-ui.com/images/avatar2/large/matthew.png'
]

export const capitalize = string => {
	if (typeof string !== 'string') {
		return ''
	}

	return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getUserAvatar = id => AVATARS[ id % AVATARS.length ]
