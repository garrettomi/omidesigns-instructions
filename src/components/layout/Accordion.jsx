import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

const AccordionDemo = () => {

  const navigate = useNavigate();

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
  <Accordion.Root
    className="bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="multiple"
    defaultValue={["item-1", "item-2"]}
    collapsible="true"
  >
    <div className="text-violet11 bg-white px-5 py-3 rounded-t-md">
      Go to
    </div>

    <AccordionItem value="item-1">
      <AccordionTrigger>Basic Info</AccordionTrigger>
      <AccordionContent onClick={(e) => handleLinkClick(e, '/start')}>
          はじめに | テンプレートの受け取り方
      </AccordionContent>
      <AccordionContent onClick={(e) => handleLinkClick(e, '/PC')}>
          【PC】基本操作
      </AccordionContent>
      <AccordionContent onClick={(e) => handleLinkClick(e, '/iPhone')}>
          【iPhone】基本操作
      </AccordionContent>
      <AccordionContent onClick={(e) => handleLinkClick(e, "/music")}>
          音楽・著作権
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Useful Info</AccordionTrigger>
      <AccordionContent onClick={(e) => handleLinkClick(e, "/download")}>
          ダウンロード・DVD化
      </AccordionContent>
      <AccordionContent onClick={(e) => handleLinkClick(e, "/safety-zone")}>
          セーフティーゾーン
      </AccordionContent>
      <AccordionContent onClick={(e) => handleLinkClick(e, "/video-explanation")}>
          説明動画
      </AccordionContent>
      <AccordionContent onClick={(e) => handleLinkClick(e, "/comments")}>
          みんなのコメント集
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
  )
};

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, onClick, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] cursor-pointer hover:bg-mauve4',
      className
    )}
    {...props}
    ref={forwardedRef}
    onClick={onClick}
  >
    <div className="py-[15px] px-5 w-full h-full hover:text-violet9">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;
  