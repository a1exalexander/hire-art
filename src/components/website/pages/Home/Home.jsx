import { Navigation } from '../../../common/Navigation/Navigation';
import { Best } from '../../components/Best';
import { Comment } from '../../components/Comment';
import { CustomersSay } from '../../components/CustomersSay';
import { FAQ } from '../../components/FAQ/FAQ';
import { Footer } from '../../components/Footer/Footer';
import { Hero } from '../../components/Hero';
import { Market } from '../../components/Market';
import { Services } from '../../components/Services';

export const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Comment />
      <Best />
      <Market />
      <CustomersSay />
      <FAQ />
      <Footer />
    </>
  );
};
