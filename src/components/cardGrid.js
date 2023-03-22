import ArticleCardImage from './card';
import { SimpleGrid } from '@mantine/core';

function CardGrid () { 

          return (
            <SimpleGrid style={{display: "flex", flexDirection: "column", marginLeft: 100}} cols={1}>
              <div>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div>
              <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
              <div>
                <ArticleCardImage title="new band here" category="rock" image="https://png.pngtree.com/png-clipart/20190517/original/pngtree-rock-group-music-band-png-image_3621390.jpg"/>
              </div>
            </SimpleGrid>
          )
        }

   export default CardGrid;