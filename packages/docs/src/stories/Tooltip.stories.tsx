import { Meta } from '@storybook/react'

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProps,
  Heading,
  Box,
} from '@rar-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <Box
        css={{
          backgroundColor: 'transparent',
          paddingTop: '$20',
          display: 'flex',
          rowGap: '$5',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Top = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Heading>Tooltip top</Heading>
    </TooltipTrigger>
    <TooltipContent side="top">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
      repellat deleniti ipsa quaerat, explicabo at distinctio minus molestias
      odio enim ea, quod quia velit. Optio animi tempore sed molestiae.
    </TooltipContent>
  </Tooltip>
)

export const Bottom = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Heading>Tooltip bottom</Heading>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quisquam
      nobis ipsum. Est atque eveniet animi rerum voluptas fugiat rem? Excepturi
      sapiente error obcaecati dolorem incidunt, qui accusamus quasi dolorum?
    </TooltipContent>
  </Tooltip>
)

export const Left = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Heading>Tooltip left</Heading>
    </TooltipTrigger>
    <TooltipContent side="left">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit et illo aut
      magnam inventore asperiores facilis, sequi enim accusamus dicta impedit
      similique voluptas qui ut vel, sed quibusdam repudiandae ipsum?
    </TooltipContent>
  </Tooltip>
)

export const Right = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Heading>Tooltip right</Heading>
    </TooltipTrigger>
    <TooltipContent side="right">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nulla ab
      saepe sed, reiciendis praesentium. Atque, fugiat quas. Eaque,
      necessitatibus. Expedita quam illo doloribus maxime id dolorem atque
      distinctio minima.
    </TooltipContent>
  </Tooltip>
)
