import React from 'react'
import { observer, inject } from 'mobx-react'
import ReactPaginate from 'react-paginate'
import {
   PageNumber,
   PaginationContainer,
   PaginationArrow,
   NavigateToPrevious,
   NavigateToNext
} from './styledComponents'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
inject('productStore')
type Props = {
   productStore: any
}
class Pagination extends React.Component<Props> {
   componentDidMount() {
      const { limit, offSet } = this.props.productStore.paginationStore
      this.doNetworkCalls(limit, offSet)
   }
   doNetworkCalls = (limit, offSet) => {
      const { getProductList } = this.props.productStore.paginationStore
      getProductList(limit, offSet)
   }

   render() {
      const {
         total,
         pageCount,
         currentPage,
         updateCurrentPage
      } = this.props.productStore.paginationStore

      return (
         <PaginationContainer>
            <ReactPaginate
               pageCount={4}
               pageRangeDisplayed={1}
               marginPagesDisplayed={2}
               forcePage={parseInt(currentPage)}
               onPageChange={updateCurrentPage}
               disableInitialCallBack={true}
               previousLabel={<NavigateToPrevious>&lt;</NavigateToPrevious>}
               nextLabel={<NavigateToNext>&gt;</NavigateToNext>}
               containerClassName='flex'
               pageClassName='flex justify-center rounded-sm border-solid border-2 border-black items-center p-2 h-6 w-6 m-1'
               activeClassName='active border-solid border-4 p-1 border-black'
            />
         </PaginationContainer>
      )
   }
}
export default Pagination
