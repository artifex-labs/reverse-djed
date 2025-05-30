import { useProtocolData } from '~/hooks/useProtocolData'
import { NavLink } from 'react-router'
import type { TokenType } from '@reverse-djed/api'
import { formatNumber } from '~/utils'
import { LoadingCircle } from './LoadingCircle'

type TokenDetailsProps = {
  token: TokenType
  route: string
}

export function TokenDetails({ token, route }: TokenDetailsProps) {
  const { isPending, error, data } = useProtocolData()
  if (error) return <div className="text-red-500 font-bold">ERROR: {error.message}</div>
  return (
    <div className="bg-light-foreground dark:bg-dark-foreground shadow-md rounded-xl p-4 md:p-6 w-full md:min-w-lg max-w-2xl mx-auto overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 ">{token} Token Details</h2>

      <div className="flex flex-col gap-6 min-w-fit">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-row justify-between">
            <p className="font-medium">Buy Price</p>
            <p className="text-lg flex justify-center items-center">
              {isPending ? <LoadingCircle /> : formatNumber(data.protocolData[token].buyPrice.toFixed(4))} ADA
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="font-medium">Sell Price</p>
            <p className="text-lg flex justify-center items-center">
              {isPending ? <LoadingCircle /> : formatNumber(data.protocolData[token].sellPrice.toFixed(4))}{' '}
              ADA
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="font-medium">Circulating Supply</p>
            <p className="text-lg flex justify-center items-center">
              {isPending ? (
                <LoadingCircle />
              ) : (
                formatNumber(data.protocolData[token].circulatingSupply.toFixed(4))
              )}{' '}
              {token}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="font-medium">Mintable Amount</p>
            <p className="text-lg flex justify-center items-center">
              {isPending ? (
                <LoadingCircle />
              ) : (
                formatNumber(data.protocolData[token].mintableAmount.toFixed(4))
              )}{' '}
              {token}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-medium">Burnable Amount</p>
            <p className="text-lg flex justify-center items-center">
              {isPending ? (
                <LoadingCircle />
              ) : (
                formatNumber(data.protocolData[token].burnableAmount.toFixed(4))
              )}{' '}
              {token}
            </p>
          </div>
        </div>

        <NavLink
          to={route}
          className="w-full text-white font-bold bg-primary hover:bg-primary-hover cursor-pointer transition-opacity px-4 py-2 rounded-lg flex items-center justify-center"
        >
          Mint/Burn
        </NavLink>
      </div>
    </div>
  )
}
