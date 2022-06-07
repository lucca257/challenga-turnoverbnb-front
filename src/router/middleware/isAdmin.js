export default function isAdmin({ next, router }) {
    if (localStorage.getItem('role') !== 'admin') {
        return router.push({ name: 'logout' });
    }

    return next();
}