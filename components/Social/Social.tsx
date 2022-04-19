import React, {useEffect} from 'react';
import {WrapSocial, WrapSocialIcon, Icon} from "./styles";
import VkIcon from "../../assets/vk.svg"
import FacebookIcon from "../../assets/facebook.svg"
import TiktokIcon from "../../assets/tiktok.svg"
import InstagramIcon from "../../assets/instagram.svg"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

const Social = ({value}: ISocialProps): JSX.Element => {
  const {internet} = useSelector((state: RootState) => state.rate)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'DEACTIVE_SOCIAL', payload: {vk: false, facebook: false, tiktok: false, instagram: false}})
  }, [internet])

  return (
    <WrapSocial>
      <p>Социальные сети</p>
      <WrapSocialIcon>
        <input
          checked={value.vk}
          onChange={e => dispatch({type: 'SET_VK', payload: e.target.checked})}
          type="checkbox"
          id="vk"
        />
        <div>
          <label htmlFor="vk">
            <Icon disabled={!value.vk} src={VkIcon.src}/>
          </label>
          <p>20 руб.</p>
        </div>
        <input
          checked={value.facebook}
          onChange={e => dispatch({type: 'SET_FACEBOOK', payload: e.target.checked})}
          type="checkbox"
          id="facebook"
        />
        <div>
          <label htmlFor="facebook">
            <Icon disabled={!value.facebook} src={FacebookIcon.src}/>
          </label>
          <p>20 руб.</p>
        </div>
        <input
          checked={value.tiktok}
          onChange={e => dispatch({type: 'SET_TIKTOK', payload: e.target.checked})}
          type="checkbox"
          id="tiktok"
        />
        <div>
          <label htmlFor="tiktok">
            <Icon disabled={!value.tiktok} src={TiktokIcon.src}/>
          </label>
          <p>20 руб.</p>
        </div>
        <input
          checked={value.instagram}
          onChange={e => dispatch({type: 'SET_INSTAGRAM', payload: e.target.checked})}
          type="checkbox"
          id="instagram"
        />
        <div>
          <label htmlFor="instagram">
            <Icon disabled={!value.instagram} src={InstagramIcon.src}/>
          </label>
          <p>20 руб.</p>
        </div>

      </WrapSocialIcon>
    </WrapSocial>
  );
};

export default Social;