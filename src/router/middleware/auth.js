export default function auth({ next, router }) {
    if (!localStorage.getItem('access_token') && !localStorage.getItem('role')) {
        return router.push({ name: 'login' });
    }

    return next();
}