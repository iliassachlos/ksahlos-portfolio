import { Box } from '@mui/material';
import { aboutProfileImage } from "../../constants/constants";

function ProfileImage() {
    
    return (
        <Box
            component='img'
            src={aboutProfileImage}
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
