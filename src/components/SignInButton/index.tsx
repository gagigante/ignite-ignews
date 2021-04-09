import { signIn, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();

  console.log(session);

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04D361" />
      Gabriel Gigante
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sign In with Github
    </button>
  );
}