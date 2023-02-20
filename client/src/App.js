import { Button, Result } from 'antd';
function App() {
	return (
		<div>
			<Result
				status='success'
				title='Success'
				subTitle='Using the Ant Design System'
				extra={[
					<Button type='primary' key='console'>
						This is
					</Button>,
					<Button key='buy'>Cool</Button>
				]}
			/>
		</div>
	);
}

export default App;
