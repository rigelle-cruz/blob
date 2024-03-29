import { createRoot } from 'react-dom/client';
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './assets/main.scss';

import App from './App';

const routes = createRoutesFromElements(<Route path="/" element={<App />} />);

export function AppProvider() {
	return <RouterProvider router={createBrowserRouter(routes)} />;
}

document.addEventListener('DOMContentLoaded', () => {
	const queryClient = new QueryClient();
	createRoot(document.getElementById('app') as HTMLElement).render(
		<QueryClientProvider client={queryClient}>
			<AppProvider />
		</QueryClientProvider>
	);
});
