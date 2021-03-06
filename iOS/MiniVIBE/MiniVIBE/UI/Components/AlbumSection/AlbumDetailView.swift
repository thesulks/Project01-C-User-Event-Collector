//
//  AlbumDetailView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

struct AlbumDetailView: View {
    @State private(set) var album: Album
    @EnvironmentObject var musicPlayer: MusicPlayer
    var body: some View {
        VStack {
            DetailHeaderView(title: album.title, subtitle: album.artist)
            ScrollView(.vertical, showsIndicators: false) {
                imageSection
                ZStack(alignment: .top) {
                    Color.vibeBackground.frame(height: UIScreen.main.bounds.height)
                    songsSection
                        .background(Color.vibeBackground)
                }
            }
        }
        .background(Color.vibeBackground.opacity(0.6).ignoresSafeArea())
        .background(Image(album.imageURLString)
                        .resizable()
                        .scaledToFill()
                        .blur(radius: 20))
        .navigationBarHidden(true)
    }
}

private extension AlbumDetailView {
    var imageSection: some View {
        VStack(alignment: .leading) {
            HStack {
                Image(album.imageURLString)
                    .resizable()
                    .frame(width: 100, height: 100, alignment: .center)
                VStack(alignment: .leading, spacing: .defaultSpacing) {
                    Text(album.title).vibeTitle3()
                    album.description.map({Text($0).vibeMainText().lineLimit(1)})
                    Text(album.artist).vibeMainText()
                    Spacer()
                    Image(systemName: "arrow.down.to.line")
                        .font(.system(size: 20)).foregroundColor(.gray)
                }
                Spacer()
            }
            VStack {
                album.description.map({Text($0).vibeMainText().lineLimit(1)})
                Text("어제 업데이트 ∙ 총 60곡, 4시간 55분").vibeTitle3()
            }
        }.padding(.horizontal, .defaultPadding)
    }
}

private extension AlbumDetailView {
    var songsSection: some View {
        LazyVGrid(
            columns: [.init(.flexible())],
            pinnedViews: [.sectionHeaders]
        ) {
            Section(header:
                        PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                songsView
            }
        }.padding(.bottom, NowPlayingBarView.height)
        .padding(.horizontal, .defaultPadding)
    }
}

private extension AlbumDetailView {
    var songsView: some View {
        ForEach(MockItemFactory.imageURLSongs) { song in
            Button(action: {
                    musicPlayer.playinglist.append(song)
                    musicPlayer.play(index: musicPlayer.playinglist.count - 1)
            }, label: {
            HStack(spacing: .defaultSpacing) {
                Image(systemName: "circle").foregroundColor(.gray)
                AsyncImageView(url: song.imageURLString)
                    .frame(width: 40, height: 40, alignment: .center)
                VStack(alignment: .leading, spacing: .defaultSpacing) {
                    Text(song.title).vibeTitle3()
                    Text(song.artist).vibeMainText()
                }
                Spacer()
                Image(systemName: "line.horizontal.3").foregroundColor(.gray)
            }   })
            .emitEventIfTapped(event: TapEvent(component: AlbumDetailView.name, target: TapEvent.Target.song))
        }
    }
}
