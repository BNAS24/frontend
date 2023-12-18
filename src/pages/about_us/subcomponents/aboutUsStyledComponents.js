import { Typography } from '@mui/material';
import { Container, styled } from '@mui/system';



export const MainContentContainer = styled(Container)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 'auto',
    width: '100%',
  })
)

export const TextContentContainer = styled(Container)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '8px',
    width: '50%',
    height: 'auto',
    p: '24px 16px !important',
    color: 'white',
  })
)

export const Title = styled(Typography)(({ theme }) =>
  theme.unstable_sx({

  })
)

export const Paragraph = styled(Typography)(({ theme }) =>
  theme.unstable_sx({

  })
)

export const EndingQuote = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    color: 'var(--theme-orange)',
    fontWeight: 700
  })
)

export const BackgroundImageContainer = styled(Container)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    height: 'auto',
    width: '50%',
    backgroundImage: 'url(https://i.postimg.cc/wvjXZ8Tg/Basketball-Action-Shot.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: {
      xs: 'auto 100%',
      sm: 'auto 100%',
      md: 'cover',
      lg: 'cover'
    },
    backgroundPosition: 'center',
  })
)