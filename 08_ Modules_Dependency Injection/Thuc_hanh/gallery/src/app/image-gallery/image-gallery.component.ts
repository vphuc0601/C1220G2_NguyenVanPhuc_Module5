import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/59471436_818626588494961_5412147165101293568_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=mSkAwAZBwkIAX8gEGhX&tn=lI9g-uoZSyViECs2&_nc_ht=scontent-xsp1-1.xx&oh=b29998a9193bcc9985c3213f9f7b5833&oe=60C8A9E7',
    'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/59729921_818626518494968_1701610135085907968_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=f9XcyJKZGFsAX8lbsKW&_nc_ht=scontent-xsp1-2.xx&oh=cf92159601a7cc5296cf3f6c9eb70cdb&oe=60C7EAD5',
    'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/107132409_1145776445779972_1243304046193428404_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=hMa00lGWQjgAX_LONyr&_nc_ht=scontent-xsp1-1.xx&oh=7b8de6295bab2280b38be8fd2f002adf&oe=60C8B917',
    'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/61053312_829831584041128_977708154852737024_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=-ewfqN9TFz0AX8NXNa5&_nc_ht=scontent.fdad2-1.fna&oh=c81fea3aaf789c0cf1b298863f515039&oe=60C8A1CB'
  ];
  itemWidth: number;
  config = 4;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }
}
