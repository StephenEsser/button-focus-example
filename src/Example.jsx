import React, { useContext, useRef } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';
import styles from './Example.module.scss';

const cx = classNames.bind(styles);

const Example = () => {
  const dismissDisclosure = useRef();
  const disclosureManager = useContext(DisclosureManagerContext);

  /**
   * Closes the modal manager by programmatically clicking the close button.
   */
  const closeDisclosureByProgrammaticClick = () => {
    document.querySelectorAll('button[aria-label="Close"]')[0].click();
  }

  /**
   * Closes the modal manager by using the dismissDisclosure callback returned from the disclose promise.
   */
  const closeDisclosureByDismissCallback = () => {
    dismissDisclosure.current();
  }

  /**
   * Discloses the modal manager with an optional timeout to close it.
   * If a timeout is provided the modal will be dismissed after the timeout duration. 
   * @param {number|bool} timeout - The dismiss timeout.
   */
  const disclose = (timeout) => {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'large',
      content: {
        key: 'example',
        component: (
          <div>
            <DisclosureManagerHeaderAdapter title="Example" />
            <Button text="Close Modal by programmatic click" onClick={closeDisclosureByProgrammaticClick} />
            <Button text="Close Modal by dismiss disclosure callback" onClick={closeDisclosureByProgrammaticClick} />
          </div>
        )
      }
    }).then((callbacks) => {
      dismissDisclosure.current = callbacks.dismissDisclosure;
    });

    if (timeout) {
      setTimeout(closeDisclosureByDismissCallback, timeout);
    }
  }

  return (
    <div className={cx('example')}>
      <Button isBlock text="Launch Modal Manager (No close timeout)" onClick={() => disclose(false)} />
      <Button isBlock text="Launch Modal Manager (10ms close timeout)" onClick={() => disclose(10)} />
      <Button isBlock text="Launch Modal Manager (100ms close timeout)" onClick={() => disclose(100)} />
      <Button isBlock text="Launch Modal Manager (200ms close timeout)" onClick={() => disclose(200)} />
      <Button isBlock text="Launch Modal Manager (300ms close timeout)" onClick={() => disclose(300)} />
      <Button isBlock text="Launch Modal Manager (1000ms close timeout)" onClick={() => disclose(1000)} />
      <Button isBlock text="Launch Modal Manager (2000ms close timeout)" onClick={() => disclose(2000)} />
    </div>
  )
}

export default Example;
