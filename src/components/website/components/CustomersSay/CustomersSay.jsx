import PropTypes from 'prop-types';
import { Slider } from '../../../common/Slider/Slider';
import { Title } from './CustomersSay.styled';
import { CustomersSayStyled } from './CustomersSay.styled';

import photo1 from '../../../common/Slider/SliderImg/photo_1.svg';
import photo2 from '../../../common/Slider/SliderImg/photo_2.svg';
import photo3 from '../../../common/Slider/SliderImg/photo_3.svg';

export function CustomersSay({ title }) {
  const slides = [
    {
      id: 1,
      name: 'Cory Delmeir',
      title: 'The best ones!',
      desc: 'I was using a couple of services, but only HireArt really helped… They have great features like intuitive UI, ease of use /UX and great customer service agents like Anna, who helped through the process. I will recommend it to my friends.  Give this service a chance!',
      img: photo1,
      pos: 'Frontend developer',
    },
    {
      id: 2,
      name: 'Cory Delmeir',
      title: 'Excellent service for both candidates & HRs',
      desc: "I had over 60 open positions in 2022 so I had been dreading the hiring flow, like how I would go through everything and figure out the best ones. Fortunately, I found HireArt and it's honestly saved me so much time. I am a new one in the field, but Jon from support helped me out right away. I'm very happy with this platform and will definitely use it again for my further carrier.",
      img: photo2,
      pos: 'HR at Netflix',
    },
    {
      id: 3,
      name: 'Cory Delmeir',
      title: 'Works for both!',
      desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
      img: photo3,
      pos: 'Visual Creator',
    },
    {
      id: 4,
      name: 'Cory Delmeir',
      title: 'Works for both!',
      desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
      img: photo3,
      pos: 'Visual Creator',
    },
    {
      id: 5,
      name: 'Cory Delmeir',
      title: 'Works for both!',
      desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
      img: photo3,
      pos: 'Visual Creator',
    },
    {
      id: 6,
      name: 'Cory Delmeir',
      title: 'Works for both!',
      desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
      img: photo3,
      pos: 'Visual Creator',
    },
    {
      id: 7,
      name: 'Cory Delmeir',
      title: 'Works for both!',
      desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
      img: photo3,
      pos: 'Visual Creator',
    },
  ];

  return (
    <CustomersSayStyled>
      <Title>{title}</Title>
      <Slider slides={slides} />
    </CustomersSayStyled>
  );
}

CustomersSay.propTypes = {
  title: PropTypes.string.isRequired,
};
