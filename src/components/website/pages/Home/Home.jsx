import { Navigation } from '../../../common/Navigation/Navigation';
import { Best } from '../../components/Best';
import { Comment } from '../../components/Comment';
import { CustomersSay } from '../../components/CustomersSay';
import { FAQ } from '../../components/FAQ/FAQ';
import { Footer } from '../../components/Footer/Footer';
import { Hero } from '../../components/Hero';
import { Market } from '../../components/Market';
import { Services } from '../../components/Services';

export function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Comment />
      <Best />
      <Market />
      <CustomersSay title="What Our Customers Say" />
      <FAQ
        title="Frequently asked questions"
        description="Don't see your question? Email "
        link="help@hireart.com"
      />
      <Footer />
    </>
  );
}
