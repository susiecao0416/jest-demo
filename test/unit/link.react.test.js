import React from 'react';
import Link from '../../src/link.react';
import renderer from 'react-test-renderer';

it('renders as an anchor when no page is set', () => {
	const tree = renderer.create(<Link page='www.face.com'>Facebook</Link>).toJSON();
	expect(tree).toMatchSnapshot();
});