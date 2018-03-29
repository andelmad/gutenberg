/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { PostPendingStatusCheck } from '../check';

describe( 'PostPendingStatusCheck', () => {
	it( 'should not render anything if the user doesn\'t have the right capabilities', () => {
		let wrapper = shallow( <PostPendingStatusCheck user={ {} }>status</PostPendingStatusCheck> );
		expect( wrapper.type() ).toBe( null );
		wrapper = shallow(
			<PostPendingStatusCheck canPublishPosts={ false }>
				status
			</PostPendingStatusCheck>
		);
		expect( wrapper.type() ).toBe( null );
	} );

	it( 'should render if the user has the correct capability', () => {
		const wrapper = shallow( <PostPendingStatusCheck canPublishPosts>status</PostPendingStatusCheck> );
		expect( wrapper.type() ).not.toBe( null );
	} );
} );
