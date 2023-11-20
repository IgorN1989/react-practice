import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Page not found! Please go to <Link to="/">Home Page</Link>
    </div>
  );
}
