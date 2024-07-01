import { Box } from '@mui/material';

function ProfileImage() {
    const profileImage =
        'https://firebasestorage.googleapis.com/v0/b/ksahlos-portfolio.appspot.com/o/others%2Fksahlos-profile-img.jpg?alt=media&token=a2e44ae2-6d24-41d4-b4b9-5b1b03133cba';

    return (
        <Box
            component='img'
            src={profileImage}
            alt='profile-pic'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                boxShadow: 3,
                width: '100%',
            }}
            loading='eager'
        />
    );
}

export default ProfileImage;
