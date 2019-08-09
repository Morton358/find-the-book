import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import './BookCovers.css'
import * as actions from '../../store/actions'
import ImageLoader from '../../components/ImageLoader/ImageLoader'
import { RootState, BookCoversProps } from '../../types'

const BookCovers: React.FC<BookCoversProps> = (props: BookCoversProps) => {
  useEffect(() => {
    if (props.allIds.length !== 0 && props.coverIds.length === 0) {
      props.onLoadImages(props.allIds)
    }
    if (props.allIds.length !== 0 && props.coverIds.length !== 0) {
      if (props.currentIndex === 0) {
        for (let i = 0; i < 2; i++) {
          props.onLoadImageSaga(props.coverIds[i])
        }
      } else {
        props.onLoadImageSaga(props.coverIds[props.currentIndex + 10])
      }
    }
  })
  return (
    <div className="carousel">
      <ImageLoader />
      <div className="next-arrow">
        <button className="btn btn-light" onClick={goToNextImg}>
          <FontAwesomeIcon icon={faChevronCircleRight} size="3x" />
        </button>
      </div>
      <div className="prev-arrow">
        <button className="btn btn-light" onClick={goToPrevImg}>
          <FontAwesomeIcon icon={faChevronCircleLeft} size="3x" />
        </button>
      </div>
    </div>
  )
}

const goToPrevImg = () => {
  console.log('You pressed left arrow')
}
const goToNextImg = () => {
  console.log('You pressed right arrow')
}
// @ts-ignore
const slideWidth = () => {
  if (document.querySelector('.image-loader') !== null) {
    // @ts-ignore
    return document.querySelector('.image-loader').clientWidth
  }
  return
}

const mapStateToProps = (state: RootState) => {
  return {
    allIds: state.books.allIds,
    coverIds: state.carousel.ids,
    downloadedCoverIds: state.carousel.downloadedCoverIds,
    currentIndex: state.carousel.currentIndex,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoadImages: (arrOfIds: number[]) => dispatch(actions.loadImages(arrOfIds)),
    onLoadImageSaga: (coverId: number) => dispatch(actions.loadImageSaga(coverId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookCovers)
